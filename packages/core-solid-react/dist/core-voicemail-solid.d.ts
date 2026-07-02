import React from 'react';

export interface CoreVoicemailSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVoicemailSolid(props: CoreVoicemailSolidProps): React.ReactElement;
export default CoreVoicemailSolid;
