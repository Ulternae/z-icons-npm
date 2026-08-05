import React from 'react';

export interface LanSquareBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBolt(props: LanSquareBoltProps): React.ReactElement;
export default LanSquareBolt;
