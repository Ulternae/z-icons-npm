import React from 'react';

export interface MinaBuildingOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBuildingOne(props: MinaBuildingOneProps): React.ReactElement;
export default MinaBuildingOne;
