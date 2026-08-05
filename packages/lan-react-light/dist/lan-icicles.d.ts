import React from 'react';

export interface LanIciclesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIcicles(props: LanIciclesProps): React.ReactElement;
export default LanIcicles;
