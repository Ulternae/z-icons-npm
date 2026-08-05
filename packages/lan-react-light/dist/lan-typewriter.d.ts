import React from 'react';

export interface LanTypewriterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTypewriter(props: LanTypewriterProps): React.ReactElement;
export default LanTypewriter;
