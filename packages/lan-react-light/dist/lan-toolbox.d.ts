import React from 'react';

export interface LanToolboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToolbox(props: LanToolboxProps): React.ReactElement;
export default LanToolbox;
