package edu.brown.cs.student.main.Server;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;

import java.io.BufferedReader;
import java.io.FileReader;
import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.Map;

public class JsonParser {
    private final BufferedReader reader;

    public JsonParser (FileReader reader) {
        this.reader = new BufferedReader(reader);
    }

    public Map<String,Object> parse() {
        try {
            String jsonString = "";
            String line = this.reader.readLine();
            while (line != null) {
                jsonString += line;
                line = this.reader.readLine();
            }
            Moshi moshi = new Moshi.Builder().build();
            Type mapStringObject = Types.newParameterizedType(Map.class, String.class, Object.class);
            JsonAdapter<Map<String, Object>> adapter = moshi.adapter(mapStringObject);
            Map<String, Object> map = adapter.fromJson(jsonString);
            return adapter.fromJson(jsonString);
        } catch (Exception e) {
            Map<String,Object> errorMap = new HashMap<>();
            errorMap.put("error_datasource", "Something went wrong when parsing the json");
            return errorMap;
        }
    }
}