import java.util.HashSet;
import java.util.Scanner;

class LinkedList {
    static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    public static boolean hasCycle(Node head) {
        Node slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter number of nodes: ");
        int n = scanner.nextInt();

        if (n == 0) {
            System.out.println("No cycle: Empty list");
            return;
        }

        Node head = new Node(scanner.nextInt());
        Node current = head;
        Node cycleNode = null;

        for (int i = 1; i < n; i++) {
            Node newNode = new Node(scanner.nextInt());
            current.next = newNode;
            current = newNode;

            if (i == n / 2) cycleNode = newNode; // Marking a node for cycle creation
        }

        System.out.print("Create cycle? (yes/no): ");
        String createCycle = scanner.next();

        if (createCycle.equalsIgnoreCase("yes")) {
            current.next = cycleNode;
            System.out.println("Cycle created.");
        }

        System.out.println("Has cycle: " + hasCycle(head));
        scanner.close();
    }
}
