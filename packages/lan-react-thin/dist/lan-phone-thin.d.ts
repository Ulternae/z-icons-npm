import React from 'react';

export interface LanPhoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneThin(props: LanPhoneThinProps): React.ReactElement;
export default LanPhoneThin;
