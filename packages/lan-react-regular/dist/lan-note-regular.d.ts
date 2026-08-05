import React from 'react';

export interface LanNoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoteRegular(props: LanNoteRegularProps): React.ReactElement;
export default LanNoteRegular;
