import React from 'react';

export interface LanNoteStickySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoteStickySolid(props: LanNoteStickySolidProps): React.ReactElement;
export default LanNoteStickySolid;
