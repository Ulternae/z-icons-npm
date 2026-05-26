import React from 'react';

export interface LanShredderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShredder: React.FC<LanShredderProps>;
export default LanShredder;
