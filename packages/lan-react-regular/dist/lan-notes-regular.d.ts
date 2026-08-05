import React from 'react';

export interface LanNotesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotesRegular(props: LanNotesRegularProps): React.ReactElement;
export default LanNotesRegular;
