import React from 'react';

export interface LanMaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMale(props: LanMaleProps): React.ReactElement;
export default LanMale;
