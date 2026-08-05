import React from 'react';

export interface LanTextSizeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextSizeThin(props: LanTextSizeThinProps): React.ReactElement;
export default LanTextSizeThin;
