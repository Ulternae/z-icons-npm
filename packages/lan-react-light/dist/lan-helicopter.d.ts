import React from 'react';

export interface LanHelicopterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelicopter(props: LanHelicopterProps): React.ReactElement;
export default LanHelicopter;
