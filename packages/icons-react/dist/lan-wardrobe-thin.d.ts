import React from 'react';

export interface LanWardrobeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWardrobeThin: React.FC<LanWardrobeThinProps>;
export default LanWardrobeThin;
