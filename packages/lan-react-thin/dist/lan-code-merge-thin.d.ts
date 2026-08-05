import React from 'react';

export interface LanCodeMergeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeMergeThin(props: LanCodeMergeThinProps): React.ReactElement;
export default LanCodeMergeThin;
