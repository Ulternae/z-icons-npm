import React from 'react';

export interface LanWrenchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWrenchThin(props: LanWrenchThinProps): React.ReactElement;
export default LanWrenchThin;
