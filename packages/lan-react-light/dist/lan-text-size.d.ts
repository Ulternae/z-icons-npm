import React from 'react';

export interface LanTextSizeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextSize(props: LanTextSizeProps): React.ReactElement;
export default LanTextSize;
