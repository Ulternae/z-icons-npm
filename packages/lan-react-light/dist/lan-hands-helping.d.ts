import React from 'react';

export interface LanHandsHelpingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsHelping(props: LanHandsHelpingProps): React.ReactElement;
export default LanHandsHelping;
