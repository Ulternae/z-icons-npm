import React from 'react';

export interface LanNotesStickySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotesStickySolid(props: LanNotesStickySolidProps): React.ReactElement;
export default LanNotesStickySolid;
