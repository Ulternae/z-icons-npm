import React from 'react';

export interface NeoGearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGear(props: NeoGearProps): React.ReactElement;
export default NeoGear;
