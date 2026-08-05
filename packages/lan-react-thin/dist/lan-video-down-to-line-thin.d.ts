import React from 'react';

export interface LanVideoDownToLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoDownToLineThin(props: LanVideoDownToLineThinProps): React.ReactElement;
export default LanVideoDownToLineThin;
