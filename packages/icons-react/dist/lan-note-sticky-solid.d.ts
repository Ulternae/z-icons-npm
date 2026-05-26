import React from 'react';

export interface LanNoteStickySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoteStickySolid: React.FC<LanNoteStickySolidProps>;
export default LanNoteStickySolid;
