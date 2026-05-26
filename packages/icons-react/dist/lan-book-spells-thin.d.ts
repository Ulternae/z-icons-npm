import React from 'react';

export interface LanBookSpellsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookSpellsThin: React.FC<LanBookSpellsThinProps>;
export default LanBookSpellsThin;
