import React from 'react';

export interface LanNotesStickyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotesStickyRegular(props: LanNotesStickyRegularProps): React.ReactElement;
export default LanNotesStickyRegular;
