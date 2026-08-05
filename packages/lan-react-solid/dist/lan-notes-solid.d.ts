import React from 'react';

export interface LanNotesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotesSolid(props: LanNotesSolidProps): React.ReactElement;
export default LanNotesSolid;
