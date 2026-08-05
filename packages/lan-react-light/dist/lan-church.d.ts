import React from 'react';

export interface LanChurchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChurch(props: LanChurchProps): React.ReactElement;
export default LanChurch;
