import React from 'react';

export interface MinaBoundingBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBoundingBox(props: MinaBoundingBoxProps): React.ReactElement;
export default MinaBoundingBox;
