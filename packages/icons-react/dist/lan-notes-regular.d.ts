import React from 'react';

export interface LanNotesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotesRegular: React.FC<LanNotesRegularProps>;
export default LanNotesRegular;
