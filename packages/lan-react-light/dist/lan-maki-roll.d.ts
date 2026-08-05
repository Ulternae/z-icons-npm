import React from 'react';

export interface LanMakiRollProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMakiRoll(props: LanMakiRollProps): React.ReactElement;
export default LanMakiRoll;
