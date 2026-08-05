import React from 'react';

export interface LanBlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlock(props: LanBlockProps): React.ReactElement;
export default LanBlock;
