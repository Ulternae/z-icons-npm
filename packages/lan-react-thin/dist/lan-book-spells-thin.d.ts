import React from 'react';

export interface LanBookSpellsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookSpellsThin(props: LanBookSpellsThinProps): React.ReactElement;
export default LanBookSpellsThin;
