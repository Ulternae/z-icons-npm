import React from 'react';

export interface LanTurkeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurkey(props: LanTurkeyProps): React.ReactElement;
export default LanTurkey;
