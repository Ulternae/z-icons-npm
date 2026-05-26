import React from 'react';

export interface LanBookBibleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookBible: React.FC<LanBookBibleProps>;
export default LanBookBible;
