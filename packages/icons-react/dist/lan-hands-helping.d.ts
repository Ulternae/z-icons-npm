import React from 'react';

export interface LanHandsHelpingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHelping: React.FC<LanHandsHelpingProps>;
export default LanHandsHelping;
