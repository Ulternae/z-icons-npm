import React from 'react';

export interface LanNarwhalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNarwhalThin(props: LanNarwhalThinProps): React.ReactElement;
export default LanNarwhalThin;
