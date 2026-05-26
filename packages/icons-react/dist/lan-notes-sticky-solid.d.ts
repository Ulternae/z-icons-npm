import React from 'react';

export interface LanNotesStickySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotesStickySolid: React.FC<LanNotesStickySolidProps>;
export default LanNotesStickySolid;
