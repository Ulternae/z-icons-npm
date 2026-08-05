import React from 'react';

export interface LanWindowRestoreThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowRestoreThin(props: LanWindowRestoreThinProps): React.ReactElement;
export default LanWindowRestoreThin;
