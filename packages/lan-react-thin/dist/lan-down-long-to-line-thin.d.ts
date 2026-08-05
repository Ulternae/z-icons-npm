import React from 'react';

export interface LanDownLongToLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownLongToLineThin(props: LanDownLongToLineThinProps): React.ReactElement;
export default LanDownLongToLineThin;
