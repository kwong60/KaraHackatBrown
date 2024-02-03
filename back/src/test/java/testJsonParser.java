import edu.brown.cs.student.main.Server.JsonParser;
import edu.brown.cs.student.main.Server.Server;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;


import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Map;

public class testJsonParser {

    /**
     * Tests value of standard json
     * @throws FileNotFoundException
     */
    @Test
    public void testParseJson() throws FileNotFoundException {
        FileReader fileReader = new FileReader("data/reflectionJson.json");
        JsonParser parser = new JsonParser(fileReader);
        Map<String, Object> map = parser.parse();
        System.out.println(map);
        assertEquals("Feature", map.get("type"));
    }

    /**
     * Tests nested json
     * @throws FileNotFoundException
     */
    @Test
    public void testParseJson2() throws FileNotFoundException {
        FileReader fileReader = new FileReader("data/reflectionJson.json");
        JsonParser parser = new JsonParser(fileReader);
        Map<String, Object> map = parser.parse();
        Map<String, Object> propsMap = (Map<String, Object>) map.get("properties");

        assertEquals("Dinagat Islands", propsMap.get("name"));
    }

}
