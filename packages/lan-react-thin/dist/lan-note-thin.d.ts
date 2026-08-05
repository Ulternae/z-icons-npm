import React from 'react';

export interface LanNoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoteThin(props: LanNoteThinProps): React.ReactElement;
export default LanNoteThin;
