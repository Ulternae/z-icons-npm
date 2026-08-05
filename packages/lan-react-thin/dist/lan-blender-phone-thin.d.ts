import React from 'react';

export interface LanBlenderPhoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlenderPhoneThin(props: LanBlenderPhoneThinProps): React.ReactElement;
export default LanBlenderPhoneThin;
