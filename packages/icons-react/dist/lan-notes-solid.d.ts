import React from 'react';

export interface LanNotesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotesSolid: React.FC<LanNotesSolidProps>;
export default LanNotesSolid;
