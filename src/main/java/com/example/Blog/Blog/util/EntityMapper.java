package com.example.Blog.Blog.util;
import java.util.List;

/**
 * @author Slim
 * @param <D> DTO
 * @param <E> Entity
 */

/**
 * created by AmenEllahBenRzig on 20/01/2020
 */
public interface EntityMapper<D, E> {

    E toEntity(D dto);

    D toDto(E entity);

    List<E> toEntityList(List<D> dtoList);

    List<D> toDtoList(List<E> entityList);
}