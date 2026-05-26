import React from 'react';

export interface LanNoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoteRegular: React.FC<LanNoteRegularProps>;
export default LanNoteRegular;
