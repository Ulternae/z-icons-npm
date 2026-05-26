import React from 'react';

export interface LanNotesStickyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotesStickyRegular: React.FC<LanNotesStickyRegularProps>;
export default LanNotesStickyRegular;
