import React from 'react';

export interface LanNotesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotesThin(props: LanNotesThinProps): React.ReactElement;
export default LanNotesThin;
