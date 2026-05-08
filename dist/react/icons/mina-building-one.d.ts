import React from 'react';

export interface MinaBuildingOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBuildingOne: React.FC<MinaBuildingOneProps>;
export default MinaBuildingOne;
