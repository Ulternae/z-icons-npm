import React from 'react';

export interface LanTypewriterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTypewriterThin(props: LanTypewriterThinProps): React.ReactElement;
export default LanTypewriterThin;
