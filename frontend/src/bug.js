<Row>
  {user.courses.map((course) => (
    <Col sm={12} md={6} lg={4} xl={3}>
      <Card>
        <Card.Img src={course.image} fluid rounded />
        <Card.Body>
          <Card.Text>{course.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>;
