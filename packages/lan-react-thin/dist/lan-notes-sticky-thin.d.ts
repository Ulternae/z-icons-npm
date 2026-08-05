import React from 'react';

export interface LanNotesStickyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotesStickyThin(props: LanNotesStickyThinProps): React.ReactElement;
export default LanNotesStickyThin;
