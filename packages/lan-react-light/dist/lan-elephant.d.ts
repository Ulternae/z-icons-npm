import React from 'react';

export interface LanElephantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanElephant(props: LanElephantProps): React.ReactElement;
export default LanElephant;
