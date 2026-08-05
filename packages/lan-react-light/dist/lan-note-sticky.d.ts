import React from 'react';

export interface LanNoteStickyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoteSticky(props: LanNoteStickyProps): React.ReactElement;
export default LanNoteSticky;
