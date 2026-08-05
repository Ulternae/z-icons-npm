import React from 'react';

export interface LanFeatherProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFeather(props: LanFeatherProps): React.ReactElement;
export default LanFeather;
