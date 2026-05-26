import React from 'react';

export interface LanNoteStickyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoteSticky: React.FC<LanNoteStickyProps>;
export default LanNoteSticky;
